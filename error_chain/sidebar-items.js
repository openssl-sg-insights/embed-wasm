initSidebarItems({"macro":[["bail","Exits a function early with an error"],["ensure","Exits a function early with an error if the condition is not satisfied"],["error_chain","Macro for generating error types and traits. See crate level documentation for details."],["quick_main","Convenient wrapper to be able to use `?` and such in the main. You can use it with a separated function:"],["stringify_internal","From https://github.com/tailhook/quick-error Changes:   - replace `impl Error` by `impl Item::description`   - $imeta Because of the `#[macro_export(local_inner_macros)]` usage on `impl_error_chain_kind` that macro will only look inside this crate for macros to invoke. So using `stringify` or `write` from the standard library will fail. Thus we here create simple wrappers for them that are not exported as `local_inner_macros`, and thus they can in turn use the standard library macros."],["write_internal","Macro used interally for output expanding an expression"]],"struct":[["Backtrace","Representation of an owned and self-contained backtrace."],["DisplayChain","A struct which formats an error for output."],["Iter","Iterator over the error chain using the `Error::cause()` method."]],"trait":[["ChainedError","This trait is implemented on all the errors generated by the `error_chain` macro."],["ExitCode","Represents a value that can be used as the exit status of the process. See `quick_main!`."]]});