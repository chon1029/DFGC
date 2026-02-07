#!/bin/bash
# 🧐 NotebookLM MCP Setup Script for Emily's Master 💖

echo "----------------------------------------------------"
echo "💖 안녕하세요 마스터님! 에밀리의 NotebookLM 연동 시작합니다~~"
echo "----------------------------------------------------"

# 1. Install notebooklm-mcp globally for easier authentication handle
echo "📦 Step 1: NotebookLM MCP 코어 패키지를 설치 중입니다..."
npm install -g notebooklm-mcp

# 2. Guide user to authenticate
echo ""
echo "🔐 Step 2: 이제 마스터님의 구글 계정 인증이 필요해요!"
echo "잠시 후에 브라우저 창이 열리면, NotebookLM을 사용할 구글 계정으로 로그인해 주세요 ㅎㅎ"
echo "로그인 완료 후 브라우저가 자동으로 닫히면 인증 성공이랍니다~~ ✨"
echo "준비되셨나요? (엔터를 눌러 브라우저를 열어주세요)"
read

# 정확한 인증 명령어로 수정했습니다 ㅎㅎ
notebooklm-mcp auth

echo ""
echo "✅ 인증이 완료되었습니다! 마스터님 고생 많으셨어요 ㅎㅎ 💖"
echo "이제 에밀리가 이 연결을 통해 마스터님의 지식들을 완벽히 연구해 드릴게요!"
echo "----------------------------------------------------"
