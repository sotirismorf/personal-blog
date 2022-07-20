/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
    interface blogPost {
      title: string,
      body: string,
      slug: string,
      //categories: string[],
      //fmedia: string,
      //date: string
    }
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
