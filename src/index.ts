#!/usr/bin/env node

/**
 * Prompt Kit CLI - Main entry point
 * A developer utility for prompt-related operations
 */

interface CliOptions {
  name?: string;
  help?: boolean;
  version?: boolean;
}

class PromptKitCli {
  private static readonly VERSION = "0.0.0";
  private static readonly DESCRIPTION = "Prompt Kit: Developer prompt utilities";

  /**
   * Parse command line arguments
   */
  private static parseArgs(): CliOptions {
    const args = process.argv.slice(2);

    if (args.length === 0) {
      return {};
    }

    const options: CliOptions = {};

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];

      switch (arg) {
        case "--help":
        case "-h":
          options.help = true;
          break;
        case "--version":
        case "-v":
          options.version = true;
          break;
        default:
          // If it's not a flag, treat it as the name argument
          if (!arg.startsWith("-")) {
            options.name = arg;
          }
          break;
      }
    }

    return options;
  }

  /**
   * Display help information
   */
  private static displayHelp(): void {
    console.log(`
${this.DESCRIPTION}

Usage:
  prompt-kit [name] [options]

Arguments:
  name          Optional name to greet (default: "World")

Options:
  -h, --help    Show this help message
  -v, --version Show version information

Examples:
  prompt-kit                    # Hello, World!
  prompt-kit Alice              # Hello, Alice!
  prompt-kit --help             # Show this help
  prompt-kit --version          # Show version
`);
  }

  /**
   * Display version information
   */
  private static displayVersion(): void {
    console.log(`v${this.VERSION}`);
  }

  /**
   * Generate greeting message
   */
  private static generateGreeting(name: string = "World"): string {
    return `Hello, ${name}! Welcome to Prompt Kit - your developer prompt utilities toolkit.`;
  }

  /**
   * Main CLI execution
   */
  public static async run(): Promise<void> {
    try {
      const options = this.parseArgs();

      // Handle help flag
      if (options.help) {
        this.displayHelp();
        return;
      }

      // Handle version flag
      if (options.version) {
        this.displayVersion();
        return;
      }

      // Generate and display greeting
      const greeting = this.generateGreeting(options.name);
      console.log(greeting);

    } catch (error) {
      console.error("Error:", error instanceof Error ? error.message : "Unknown error occurred");
      process.exit(1);
    }
  }
}

// Execute CLI when run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  PromptKitCli.run().catch((error) => {
    console.error("Fatal error:", error instanceof Error ? error.message : "Unknown error");
    process.exit(1);
  });
}