import { Alert } from "react-bootstrap";

export default function AlertBS() {
  return (
    <>
      {["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}
