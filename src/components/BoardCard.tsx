import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function BoardCard({
  heading,
  text,
  boardSeqno,
}: {
  heading: string;
  text: string;
  boardSeqno: number;
}) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">
          <Link
            href={{
              //   pathname: `/content/[${boardSeqno}]`,
              pathname: "/content",
            }}
          >
            View More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
