import { Grid, GridItem } from "./Grid";

export default {
    title: "components/grid",
    component: Grid,
};

export const GridStory = () => {
    return (
        <div className="flex flex-col bg-white p-8 items-center gap-y-10 text-center items-stretch justify-center">
            <div>
                <h2>{`@360px`}</h2>
                <Grid
                    width={360}
                    height={360}
                    cols={4}
                    gap={16}
                    padding={16}
                    className="mx-auto"
                >
                    <GridItem cols={2} />
                    <GridItem cols={2} />
                    <GridItem cols={4} rows={2} />
                </Grid>
            </div>
            <div>
                <h2>{`@600px`}</h2>
                <Grid
                    width={600}
                    height={600}
                    cols={6}
                    gap={16}
                    padding={20}
                    className="mx-auto"
                >
                    <GridItem cols={2} />
                    <GridItem cols={2} />
                    <GridItem cols={2} />
                    <GridItem cols={3} rows={2} />
                    <GridItem cols={3} rows={2} />
                    <GridItem cols={6} rows={3} />
                </Grid>
            </div>
            <div>
                <h2>{`@800px`}</h2>
                <Grid
                    width={800}
                    height={800}
                    cols={6}
                    gap={24}
                    padding={28}
                    className="mx-auto"
                >
                    <GridItem cols={2} />
                    <GridItem cols={2} />
                    <GridItem cols={2} />
                    <GridItem cols={3} rows={2} />
                    <GridItem cols={3} rows={2} />
                    <GridItem cols={6} rows={3} />
                </Grid>
            </div>
            <div>
                <h2>{`@1024px`}</h2>
                <Grid
                    width={1024}
                    height={1440}
                    cols={12}
                    gap={24}
                    padding={32}
                    className="mx-auto"
                >
                    <GridItem cols={3} rows={2} />
                    <GridItem cols={3} rows={2} />
                    <GridItem cols={3} rows={2} />
                    <GridItem cols={3} rows={2} />
                    <GridItem cols={4} rows={3} />
                    <GridItem cols={4} rows={3} />
                    <GridItem cols={4} rows={3} />
                    <GridItem cols={6} rows={4} />
                    <GridItem cols={6} rows={4} />
                    <GridItem cols={12} rows={10} />
                </Grid>
            </div>
            <div>
                <h2>{`@1288px+`}</h2>
                <Grid
                    width={1288}
                    height={800}
                    cols={12}
                    gap={24}
                    padding={32}
                    className="mx-auto"
                >
                    <GridItem cols={3} rows={2} />
                    <GridItem cols={3} rows={2} />
                    <GridItem cols={3} rows={2} />
                    <GridItem cols={3} rows={2} />
                    <GridItem cols={4} rows={3} />
                    <GridItem cols={4} rows={3} />
                    <GridItem cols={4} rows={3} />
                    <GridItem cols={6} rows={4} />
                    <GridItem cols={6} rows={4} />
                </Grid>
            </div>
        </div>
    );
};
