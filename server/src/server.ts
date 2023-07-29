import app from "./app";

const port = 1529;

app.listen(port, () => {
  console.log(`[server]: listening on port ${port}`);
});
