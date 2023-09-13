import styles from "./PrimaryNavbar.module.scss";
import {
  Badge,
  Divider,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import FlexDiv from "@/components/flexDiv";
import {
  Favorite,
  Menu,
  Person,
  Search,
  ShoppingCart,
  LocalPhone,
} from "@mui/icons-material";
import BooksIcon from "@/assets/icons/Books.svg";
import Image from "next/image";
import cx from "classnames";

const PrimaryNavbar = () => {
  return (
    <>
      <FlexDiv
        className={styles.container}
        align="center"
        justify="space-between"
        gap={10}
      >
        <FlexDiv gap={8} align="center">
          <Image src={BooksIcon} alt="books-image" />
          <Divider orientation="vertical" color="#937DC2" flexItem />

          <Typography
            color="rgba(147, 125, 194, 0.60)"
            fontSize={12}
            className={styles.tagLine}
          >
            <span>We love</span>
            <br /> books
          </Typography>
          <Search opacity={0.6} className={styles.searchIconTabletMobile} />
        </FlexDiv>
        <OutlinedInput
          placeholder="Type any book here"
          className={styles.search}
          sx={{
            "& fieldset": { border: "none" },
          }}
          endAdornment={
            <Search opacity={0.6} className={styles.searchIconDesktop} />
          }
        />
        <FlexDiv gap={20} className={styles.links}>
          <Link href="#" color="inherit" underline="none">
            Privacy policy
          </Link>
          <Link href="#" color="inherit" underline="none">
            Warranty
          </Link>
          <Link href="#" color="inherit" underline="none">
            Shipping
          </Link>
          <Link href="#" color="inherit" underline="none">
            Returns
          </Link>
        </FlexDiv>
        <FlexDiv
          gap={16}
          justify="flex-end"
          className={styles.iconsDesktopTablet}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"center"}
            gap={1}
            className={styles.phoneNumber}
          >
            <LocalPhone fontSize="large" className={styles.icon} />
            +445 87 999 000
          </Stack>
          <ShoppingCart fontSize="large" className={styles.icon} />
          <Divider orientation="vertical" color="#937DC2" flexItem />
          <Badge badgeContent={3} color="secondary" variant="string">
            <Favorite fontSize="large" className={styles.icon} />
          </Badge>
          <Divider orientation="vertical" color="#937DC2" flexItem />
          <Person fontSize="large" className={styles.icon} />
          <Menu fontSize="large" className={cx(styles.icon, styles.menuIcon)} />
        </FlexDiv>
        <FlexDiv gap={16} justify="flex-end" className={styles.iconsMobile}>
          <ShoppingCart fontSize="large" className={styles.icon} />
          <Menu fontSize="large" className={styles.icon} />
        </FlexDiv>
      </FlexDiv>
      <Divider flexItem className={styles.fullDivider} />
    </>
  );
};
export default PrimaryNavbar;
