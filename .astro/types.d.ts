declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"docs": {
"en/introduction.mdx": {
  id: "en/introduction.mdx",
  slug: "en/introduction",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/page-2.md": {
  id: "en/page-2.md",
  slug: "en/page-2",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/page-3.md": {
  id: "en/page-3.md",
  slug: "en/page-3",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"en/page-4.md": {
  id: "en/page-4.md",
  slug: "en/page-4",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"zh/introduction.mdx": {
  id: "zh/introduction.mdx",
  slug: "zh/introduction",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"zh/page-2.md": {
  id: "zh/page-2.md",
  slug: "zh/page-2",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"zh/page-3.md": {
  id: "zh/page-3.md",
  slug: "zh/page-3",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"zh/page-4.md": {
  id: "zh/page-4.md",
  slug: "zh/page-4",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"zh/privacy.md": {
  id: "zh/privacy.md",
  slug: "zh/privacy",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"zh/usage/README.md": {
  id: "zh/usage/README.md",
  slug: "zh/usage/readme",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"zh/usage/docker.mdx": {
  id: "zh/usage/docker.mdx",
  slug: "zh/usage/docker",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"zh/usage/linux.mdx": {
  id: "zh/usage/linux.mdx",
  slug: "zh/usage/linux",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"zh/usage/macos.mdx": {
  id: "zh/usage/macos.mdx",
  slug: "zh/usage/macos",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"zh/usage/qts.mdx": {
  id: "zh/usage/qts.mdx",
  slug: "zh/usage/qts",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"zh/usage/synology.mdx": {
  id: "zh/usage/synology.mdx",
  slug: "zh/usage/synology",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
"zh/usage/windows.mdx": {
  id: "zh/usage/windows.mdx",
  slug: "zh/usage/windows",
  body: string,
  collection: "docs",
  data: InferEntrySchema<"docs">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
