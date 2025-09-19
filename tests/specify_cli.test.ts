import { describe, it, expect } from 'vitest';
import { StepTracker, AI_CHOICES, SCRIPT_TYPE_CHOICES } from '../src/specify_cli/index';

describe('StepTracker', () => {
  it('should add and update steps', () => {
    const tracker = new StepTracker('Test');
    tracker.add('step1', 'First step');
    tracker.start('step1');
    tracker.complete('step1', 'done');
    expect(tracker.steps[0].status).toBe('done');
    expect(tracker.steps[0].detail).toBe('done');
  });

  it('should render output', () => {
    const tracker = new StepTracker('Render Test');
    tracker.add('step1', 'First');
    tracker.complete('step1');
    const output = tracker.render();
    expect(output).toContain('First');
  });
});

describe('Constants', () => {
  it('should contain copilot in AI_CHOICES', () => {
    expect(AI_CHOICES.copilot).toBeDefined();
  });
  it('should contain sh in SCRIPT_TYPE_CHOICES', () => {
    expect(SCRIPT_TYPE_CHOICES.sh).toBeDefined();
  });
});

// ניתן להוסיף טסטים לפונקציות נוספות בהמשך
