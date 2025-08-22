import { createFileRoute } from "@tanstack/react-router";
import { Typography } from "@mui/material";

export const Route = createFileRoute("/access/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div>
        <Typography variant="h3">アクセスああああ</Typography>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9451289050694!2d139.75585847633468!3d35.70296787258021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d761e9089c7%3A0xdcd9271c2f3591c8!2z5rW36a6u44G_44KE44GT!5e0!3m2!1sja!2sjp!4v1754974471395!5m2!1sja!2sjp"
        width="600"
        height="450"
        loading="lazy"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
}
