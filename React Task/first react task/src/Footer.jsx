function Footer({ total }) {
  return (
    <footer
      style={{
        marginTop: "20px",
        borderTop: "1px solid #ccc",
        padding: "10px",
      }}
    >
      Total Students: {total}
    </footer>
  );
}
export default Footer;
