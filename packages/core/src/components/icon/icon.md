@# Icon

<div class="pt-callout pt-intent-primary pt-icon-info-sign">
    See [**Icons**](#icons) for a searchable list of all available UI icons.
</div>

<div class="pt-callout pt-intent-primary pt-icon-info-sign">
    <h5>SVG icons in 2.0</h5>
    Blueprint 2.0 introduced SVG icon support and moved icon resources to a separate __@blueprintjs/icons__ package.
    The `Icon` component now renders SVG paths and the icon classes are no longer used by any Blueprint React component.
    Icon font support has been preserved but should be considered a legacy feature that will be removed in a
    future major version.
</div>

This section describes two ways of using the UI icon font: via CSS or via React component.

Many Blueprint components provide an `iconName` prop, which supports both the
full name `pt-icon-projects` and the short name `projects`.

@reactExample IconExample

@## JavaScript API

The `Icon` component is available in the __@blueprintjs/core__ package.
Make sure to review the [general usage docs for JS components](#blueprint.usage).

Use the `<Icon>` component to easily render __SVG icons__ in React. The `iconName` prop is typed
such that editors can offer autocomplete for known icon names. The optional `iconSize` prop ensures
you'll never forget a sizing class and clarifies the expected width and height of the icon element.
The component also accepts all valid HTML props for an `<svg>` element.

Data files in the __@blueprintjs/icons__ package provide SVG path information for Blueprint's 300+ icons
for 16px and 20px grids. The `iconName` prop dictates which SVG is rendered and `iconSize` determines
which pixel grid is used: `iconSize >= 20` will use the 20px grid and smaller icons will use the 16px grid.

```tsx
// string literals are supported through IconName union type
<Icon iconName="cross" />
<Icon iconName="pt-icon-globe" iconSize={20} />
<Icon iconName="graph" iconSize={40} intent={Intent.PRIMARY} />

// can also use IconClasses string enum and Icon.SIZE_* constants
import { IconClasses } from "@blueprintjs/core";
<Icon iconName={IconClasses.ALIGN_LEFT} iconSize={Icon.SIZE_LARGE} />

// can pass all valid HTML props
<Icon iconName="add" onClick={this.handleAdd} onKeyDown={this.handleAddKeys}>
```

@interface IIconProps

@## CSS API

<div class="pt-callout pt-intent-warning pt-icon-warning-sign">
    <h5>Icon fonts are legacy in 2.0</h5>
    Blueprint's icon fonts should be considered a legacy feature and will be removed in a future major version.
    The SVGs rendered by the React component do not suffer from the blurriness of icon fonts, and browser
    support is equivalent.
</div>

The CSS-only icons API uses the __icon fonts__ from the __@blueprintjs/icons__ package.

To use Blueprint UI icons via CSS, you must apply two classes to a `<span>` element:
- a __sizing class__, either `pt-icon-standard` (16px) or `pt-icon-large` (20px)
- an __icon name class__, such as `pt-icon-projects`

Icon classes also support the four `.pt-intent-*` modifiers to color the image.

```html
<span class="pt-icon-{{size}} pt-icon-{{name}}"></span>

<span class="pt-icon-standard pt-icon-projects"></span>
<span class="pt-icon-large pt-icon-geosearch pt-intent-success"></span>
```

<div class="pt-callout pt-intent-primary pt-icon-info-sign">
    <h5>Non-standard sizes</h5>
    Generally, icons should only be used at either 16px or 20px. However, if a non-standard size is
    necessary, set a `font-size` that is whole multiple of 16 or 20 with the relevant size class.
    You can instead use the class `pt-icon` to make the icon inherit its size from surrounding text.
</div>
