//출입 안내판
export default function robots() {
  return {
    rules: {
      userAgent: "*", //모든 검색 로봇에게
      allow: "/", //모든 페이지에 접근해도됨
      disallow : "/admin"
    },
    sitemap: "http://localhost:3000/sitemap.xml", //페이지 목록
  };
}