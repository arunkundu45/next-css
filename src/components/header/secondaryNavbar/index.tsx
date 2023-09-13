import styles from "./SecondaryNavbar.module.scss";
import {Button, Divider, Link, Stack} from "@mui/material";
import FlexDiv from "@/components/flexDiv";
import {LocalPhone} from "@mui/icons-material";

const SecondaryNavbar = () => {
    return (
        <>
            <FlexDiv
                className={styles.container}
                align="center"
                justify="space-between"
                gap={10}
            >
                <FlexDiv gap={24} className={styles.links} align="center">
                    <Link href="#" color="inherit" underline="none">
                        The must read
                    </Link>
                    <Link href="#" color="inherit" underline="none">
                        News
                    </Link>
                    <Link href="#" color="inherit" underline="none">
                        Promotion of the mount{" "}
                    </Link>
                    <Link href="#" color="inherit" underline="none">
                        Publish
                    </Link>
                    <Link href="#" color="inherit" underline="none">
                        Subscribe to the newsletter
                    </Link>
                </FlexDiv>
                <FlexDiv gap={36} align="center">
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent={"center"}
                        gap={1}
                    >
                        <LocalPhone fontSize="large" className={styles.icon}/>
                        +445 87 999 000
                    </Stack>
                    <Button variant="outlined" className={styles.requestCallButton}>
                        Request a call
                    </Button>
                </FlexDiv>
            </FlexDiv>
            <Divider flexItem className={styles.fullDivider}/>
        </>
    );
};

export default SecondaryNavbar;
