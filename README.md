# shortcut_api

[![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Flatest-version%2Fx%2Fshortcut_api%2Fmod.ts)](https://deno.land/x/shortcut_api)

A Shortcut (formerly clubhouse) api wrapper for deno.

## Usage

Import the Shortcut client and initialize it with your token.

```ts
import { Shortcut } from "https://deno.land/x/shortcut_api@v1.0.1/mod.ts";

const client = new Shortcut({ token: "xxx-xxx-xxx" });
```

### Via env

Define env var `SHORTCUT_API_TOKEN` with your token.

> :warning: With this method you will have to launch your application with the
> `--allow-env` flag

```ts
const client = new Shortcut();
```

## Features

From the client all the methods currently accessible (14/09/2021) from the API
v3 are available. https://shortcut.com/api/rest/v3

Categories, Entity-Templates, Epic-Workflow, Epics, External-Link, Files,
Groups, Iterations, Labels, Linked-Files, Member, Members, Milestones, Projects,
Repositories, Search, Stories, Story-Links, Workflows

## Examples

```ts
// Get all projects
const projects = await client.getProjects();

// Add a new story for the first project
const story = await client.createStory({
  name: "Fake story",
  project_id: projects[0].id,
  description: "Fake description",
});

const updatedStory = await client.updateStory(story.id, {
  description: "Updated fake description",
});

await client.deleteStory(/* ... */);

// Get iterations
const iterations = await client.getIterations();
```
