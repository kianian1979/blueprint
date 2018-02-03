/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import * as classNames from "classnames";
import * as React from "react";
import * as Classes from "../../common/classes";
import { IProps } from "../../common/props";

export interface IButtonGroupProps extends IProps, React.HTMLProps<HTMLDivElement> {
    /**
     * Text alignment of button contents.
     * `align="left"` will left-align button text and push `rightIcon` to right side.
     * `align="right"` right-aligns text and pushes `icon` to left side.
     * This prop only has an effect if buttons are wider than their default widths.
     */
    align?: "left" | "center" | "right";

    /**
     * Whether the button group should take up the full width of its container.
     * @default false
     */
    fill?: boolean;

    /**
     * Whether the child buttons should appear with minimal styling.
     * @default false
     */
    minimal?: boolean;

    /**
     * Whether the child buttons should appear with large styling.
     * @default false
     */
    large?: boolean;

    /**
     * Whether the button group should appear with vertical styling.
     * @default false
     */
    vertical?: boolean;
}

// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
export class ButtonGroup extends React.PureComponent<IButtonGroupProps, {}> {
    public static displayName = "Blueprint2.ButtonGroup";

    public render() {
        const { align, className, fill, minimal, large, vertical, ...htmlProps } = this.props;
        const buttonGroupClasses = classNames(
            Classes.BUTTON_GROUP,
            {
                [Classes.ALIGN_LEFT]: align === "left",
                [Classes.ALIGN_RIGHT]: align === "right",
                [Classes.FILL]: fill,
                [Classes.LARGE]: large,
                [Classes.MINIMAL]: minimal,
                [Classes.VERTICAL]: vertical,
            },
            className,
        );
        return (
            <div {...htmlProps} className={buttonGroupClasses}>
                {this.props.children}
            </div>
        );
    }
}
