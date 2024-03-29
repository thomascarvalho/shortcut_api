/** `version` managed by https://deno.land/x/land/publish. */
export const VERSION = "2.0.0"

/** `prepublish` will be invoked before publish, return `false` to prevent the publish. */
export async function prepublish(version: string) {
  return true
}

/** `postpublish` will be invoked after published. */
export async function postpublish(version: string) {
  console.log("Upgraded to", version)
}