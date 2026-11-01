import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() { // 챗봇 화면 만드는 컴포넌트
  const [input, setInput] = useState(""); // 입력창의 텍스트 관리

  const [messages, setMessages] = useState([ // 채팅 화면에 표시할 메시지 목록 관리
    {
      role: "assistant", 
      text: "무인도 안내소에 오신 걸 환영해요! 무엇을 도와드릴까요? 🌿", 
    },
  ]);

  // API 응답 대기 상태 관리
  const [loading, setLoading] = useState(false);

  // 빈 메시지 전송과 요청 중 중복 전송 방지
  const sendMessage = async () => {
    if (!input.trim() || loading) return; 

    const userMessage = input.trim(); //입력값 양쪽의 공백을 제거해서 저장

    // 사용자 메시지를 채팅 목록에 추가
    setMessages((prev) => [ 
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    // 입력창을 비우고 로딩 시작
    setInput("");
    setLoading(true); 

    try { 
      // 1. 환경변수(.env)에서 Gemini API Key 가져오기
      // API Key는 .env 파일에 VITE_GEMINI_API_KEY로 저장되어 있어야 함

      // ===== TODO 1: API Key 가져오기 =====
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY; //환경변수에서 API 값 읽기


      // ======================================


      // 2. 사용할 Gemini AI 모델 지정
      const model = "gemini-3.6-flash";

      // API 키가 없으면 요청을 중단하고 catch로 이동
      if (!apiKey) {
        throw new Error(
          "API Key를 찾을 수 없습니다. .env 파일을 확인해주세요."
        );
      }


      // 3. Gemini API 요청 URL 생성
      // 모델명과 API Key를 이용해 요청할 주소를 구성

      // ===== TODO 2: API 요청 URL 생성 =====
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;


      // ======================================

      console.log("REQUEST MODEL:", model); //요청할 모델명을 콘솔에 출력


      // 4. fetch 대신 axios.post로 사용자 메시지 전송 (JSON 변환과 헤더 설정은 자동 처리)
      const response = await axios.post(url, {
        contents : [
          {
            role : "user",
            parts: [
              {
                text : userMessage,
              },
            ],
          },
        ],
      });

      // 5. response.json() 대신 response.data로 응답 가져오기
      const data = response.data;

      //axios가 변환한 응답 데이터를 가져와 콘솔에서 확인
      console.log("HTTP STATUS:", response.status);
      console.log("Gemini Response:", data);

      // axios는 HTTP 오류를 catch로 보내므로 response.ok 검사는 삭제했습니다!


      // 6. 응답에서 AI 답변 텍스트 추출
      const aiText = 
          data?.candidates?.[0]?.content?.parts
          ?.map((part) => part.text)
          .filter(Boolean)
          .join("\n")||"AI 응답이 없습니다.";

      // AI 응답을 채팅 목록에 추가
      // React 상태가 변경되면서 채팅 화면에 AI 메시지가 표시됨
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: aiText,
        },
      ]);

    } catch (error) {
      // 10. API 호출 과정에서 오류가 발생하면 실행
      // 오류 내용을 콘솔에 출력
      console.error("Gemini API Error:", error);

      // 서버가 알려준 오류 이유가 있으면 사용하고, 없으면 기본 오류 메시지 사용
      const errorMessage = error.response?.data?.error?.message || error.message;

      // 사용자에게 오류 메시지 표시
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `오류가 발생했습니다.\n${errorMessage}`,
        },
      ]);

    } finally {
      // API 요청 성공 여부와 관계없이 로딩 상태 종료
      setLoading(false);
    }
  };

  // Enter 키로 전송하고, shift+enter는 줄바꿈을 허용하는 코드
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="app">
      <div className="chat-container">

        <header className="chat-header">
          <div>
            <h1 className = "chat-title">
              <img src = "/images/leaf.png" alt = "" className = "leaf-icon"/>
              Likelion 무인도 안내소🦁
            </h1>
            <p>무엇이 궁금하신가요?</p>
          </div>

          <div className="status">
            <span />
            안내소 운영 중
          </div>
        </header>

        <main className="chat-body">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-row ${
                message.role === "user"
                  ? "user-row"
                  : "assistant-row"
              }`}
            >
              {message.role === "assistant" && (
                <div className="avatar">
                  <img src = "/images/nugul.webp" alt = "너굴" />
                </div>
              )}

              <div
                className={`message ${
                  message.role === "user"
                    ? "user-message"
                    : "assistant-message"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="message-row assistant-row">
              <div className="avatar">
                🦝
              </div>

              <div className="message assistant-message loading-message">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
        </main>

        <div className="chat-input-area">
          <textarea
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="너굴이에게 말을 걸어보세요..."
            rows={1}
          />

          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
          >
            {loading ? "전송 중..." : "말 걸기"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;