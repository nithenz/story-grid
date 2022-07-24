import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./Grid.module.css";

export interface GridProps {
    width?: string | number;
    height?: string | number;
    className?: string;
    cols?: number;
    gap?: string | number;
    padding?: string | number;
}

export interface GridItemProps {
    cols?: number;
    // col?: string;
    rows?: number;
    // row?: string;
}

export const GridItem: FC<PropsWithChildren<GridItemProps>> = (props) => {
    const { children, cols, rows } = props;

    return (
        <div
            className="flex bg-[#d6dbed] col-span-2 items-center justify-center"
            style={{
                gridColumn: cols ? `span ${cols} / span ${cols}` : undefined,
                gridRow: rows ? `span ${rows} / span ${rows}` : undefined,
            }}
        >
            {children}
        </div>
    );
};

export const Grid: FC<PropsWithChildren<GridProps>> = (props) => {
    const {
        children,
        width,
        height,
        className,
        cols = 4,
        gap = 16,
        padding = 0,
    } = props;

    return (
        <div
            className={clsx(
                // "grid",
                // "grid grid-cols-4 grid-flow-row gap-4 p-4 max-w-xs w-full grid-rows-[100px_100px_100px]"
                // styles["grid"],
                "grid w-full",
                className
            )}
            style={{
                maxWidth: width ?? 360,
                height: height ?? 360,
                gap,
                padding,
                gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            }}
        >
            {children}
            {/* <GridItem col={2} />
            <GridItem col={2} />
            <GridItem col={4} row={2} /> */}
            {/* <div
                className="flex bg-[#d6dbed] col-span-2 items-center justify-center"
                style={{ gridArea: "a" }}
            >
                1
            </div>
            <div className="flex bg-[#d6dbed] col-span-2 items-center justify-center">
                2
            </div>
            <div className="flex bg-[#d6dbed] row-span-2 col-span-4 items-center justify-center">
                3
            </div>
            <div className="flex bg-[#d6dbed] row-span-2 col-span-4 items-center justify-center">
                4
            </div>
            <div className="flex bg-[#d6dbed] row-span-2 col-span-4 items-center justify-center">
                5
            </div>
            <div className="flex bg-[#d6dbed] row-span-2 col-span-4 items-center justify-center">
                6
            </div>
            <div className="flex bg-[#d6dbed] row-span-2 col-span-4 items-center justify-center">
                7
            </div> */}
            {/* <div className="col-span-2 bg-[#cacaca]">1</div> */}
            {/* <div className="col-span-2 bg-[#cacaca]">2</div> */}
        </div>
    );
};

export default Grid;
