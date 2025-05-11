import React from "react";
import ViewDetalPosts from "./_components/v-page";

export default function DetailPost({ params }: { params: string }) {
  return (
    <>
      <ViewDetalPosts params={params.slug} />
    </>
  );
}
