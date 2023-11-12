---
title: General Tips
description: General tips for testing Obsidian plugins
---

## Descriptive Test Names

Just like in normal programming, descriptive names are king. You should be able to tell what a specific test tests by just looking at it's name.

[This](https://www.youtube.com/watch?v=MWsk1h8pv2Q) talk by Kevlin Henney on the structure and interpretation of test cases give a good explanation on how to name test cases.
His examples in the talk are not in TypeScript but they can be easily translated.

## Small Tests

Each test should only test one thing. This does not mean that a test must only have one `expect`.
A test should do something to the subject being tested and then check that the state of the subject is what you expect with one or more `expect` calls.

## Example

Say for example you want to test a time parser for the format `HH:MM` where `HH` is the two digit hour and `MM` is the two digit minute. 
If the parser succeeds it returns an object with `getHour()` and `getMinute()` which return numbers, and it fails it returns `undefined`.

A good test structure might look like this.

```ts
// here we test a time parser that returns undefined on a failed parse
describe('time parser', () => {
	describe('should succeed on valid time', () => {
		// use test.each to iterate over some valid times
		test.each([
			['00:00', 0, 0],
			['01:05', 1, 5],
			['03:25', 3, 25],
			['23:59', 23, 59],
		])('%s', (time, expectedHour, expectedMinute) => {
			expect(parseTime(time)?.getHour()).toBe(expectedHour);
			expect(parseTime(time)?.getMinute()).toBe(expectedMinute);
		});
	});

	describe('should fail on invalid time format', () => {
		// use test.each to iterate over some malformed times
		test.each([['00:0'], ['0:05'], ['304:25'], ['25a'], [''], ['23h:15m'], ['23#15']])('%s', time => {
			expect(parseTime(time)).toBe(undefined);
		});
	});

	describe('should fail on time out of bounds', () => {
		// use test.each to iterate over some ivalid times where the time is out of bounds
		test.each([['-01:00'], ['24:05'], ['26:05'], ['05:60'], ['05:99']])('%s', time => {
			expect(parseTime(time)).toBe(undefined);
		});
	});
});
```

This gives a nice and readable test output, where it is immediately apparent what is being tested.

```
✓ time parser > should succeed on valid time > 00:00
✓ time parser > should succeed on valid time > 01:05
✓ time parser > should succeed on valid time > 03:25
✓ time parser > should succeed on valid time > 23:59

✓ time parser > should fail on invalid time format > 00:0
✓ time parser > should fail on invalid time format > 0:05
✓ time parser > should fail on invalid time format > 304:25
✓ time parser > should fail on invalid time format > 25a
✓ time parser > should fail on invalid time format > test
✓ time parser > should fail on invalid time format > 23h:15m
✓ time parser > should fail on invalid time format > 23#15

✓ time parser > should fail on time out of bounds > -01:00
✓ time parser > should fail on time out of bounds > 24:05
✓ time parser > should fail on time out of bounds > 26:05
✓ time parser > should fail on time out of bounds > 05:60
✓ time parser > should fail on time out of bounds > 05:99
```
