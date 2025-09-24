import Button from "@mui/material/Button";

export default function CommonButton({ children, ...props }) {
  return (
    <Button variant="contained" color="primary" {...props}>
      {children}
    </Button>
  );
}
