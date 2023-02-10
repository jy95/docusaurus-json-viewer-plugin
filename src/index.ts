import { Plugin, LoadContext } from "@docusaurus/types"

import MonacoWebpackPlugin from "monaco-editor-webpack-plugin"

import type {
  EditorLanguage,
  EditorFeature,
  NegatedEditorFeature,
  IFeatureDefinition,
} from "monaco-editor/esm/metadata"

export interface PluginOptions {
  /**
   * To customize monaco editor, depending of your needs
   * More info on https://github.com/microsoft/monaco-editor/tree/main/webpack-plugin#options
   */
  monacoConfig?: {
    /**
     * Include only a subset of the languages supported.
     * @default ["json"]
     */
    languages?: EditorLanguage[]
    /**
     * Custom languages (outside of the ones shipped with the `monaco-editor`).
     */
    customLanguages?: IFeatureDefinition[]
    /**
     * Include only a subset of the editor features.
     * Use e.g. '!contextmenu' to exclude a certain feature.
     * (By default, all features are enabled)
     */
    features?: (EditorFeature | NegatedEditorFeature)[]
    /**
     * Specify a filename template to use for generated files.
     * Use e.g. '[name].worker.[contenthash].js' to include content-based hashes.
     */
    filename?: string
    /**
     * The absolute file system path to the monaco-editor npm module.
     * Use e.g. `C:\projects\my-project\node-modules\monaco-editor`
     */
    monacoEditorPath?: string
    /**
     * Override the public path from which files generated by this plugin will be served.
     * This wins out over Webpack's dynamic runtime path and can be useful to avoid attempting to load workers cross-
     * origin when using a CDN for other static resources.
     * Use e.g. '/' if you want to load your resources from the current origin.
     */
    publicPath?: string
    /**
     * Specify whether the editor API should be exposed through a global `monaco` object or not. This
     * option is applicable to `0.22.0` and newer version of `monaco-editor`. Since `0.22.0`, the ESM
     * version of the monaco editor does no longer define a global `monaco` object unless
     * `global.MonacoEnvironment = { globalAPI: true }` is set
     * @see https://github.com/microsoft/monaco-editor/blob/main/CHANGELOG.md#0220-29012021
     */
    globalAPI?: boolean
  }
}

/**
 * The type of data your plugin loads.
 * This is set to never because the example doesn't load any data.
 */
export type MyPluginLoadableContent = never

export default function myPlugin(
  context: LoadContext,
  options: PluginOptions
): Plugin<MyPluginLoadableContent | PluginOptions> {
  return {
    // change this to something unique, or caches may conflict!
    name: "docusaurus-json-schema-plugin",

    // From https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md
    configureWebpack() {
      return {
        plugins: [
          new MonacoWebpackPlugin(
            options?.monacoConfig || {
              // By default, json is enough for most use case but customers have the final words ...
              languages: ["json"],
            }
          ),
        ],
      }
    },

    getThemePath() {
      // Where compiled JavaScript output lives
      return "../lib/theme"
    },

    getTypeScriptThemePath() {
      // Where TypeScript source code lives
      return "../src/theme"
    },
  }
}
