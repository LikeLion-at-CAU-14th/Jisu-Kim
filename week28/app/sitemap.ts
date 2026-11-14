import { albums } from "@/data/albums";

//사이트 지도
export default function sitemap() { //이 함수를 이용해서 sitemap.xml 만들어줌
  return [
    { url: "http://localhost:3000" }, //목록 페이지 주소
    ...albums.map((album) => ({ //앨범마다 주소
      url: `http://localhost:3000/albums/${album.id}`,
    })),
  ];
}