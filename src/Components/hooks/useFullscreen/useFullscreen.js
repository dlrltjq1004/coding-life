import { useRef } from 'react';

export const useFullscreen = callback => {
    const element = useRef();

    // Screen 상태 체크 현재 스크린이 Full 인지 small 인지
    const runCb = isFull => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    }
    const triggerFull = () => {
        // 풀 스크린 브라우저 호환
        if (element.current.requestFullscreen) {
            element.current.requestFullscreen(); // 크롬
        } else if (element.current.mozRequestFullScreen) {
            element.current.mozRequestFullScreen(); // 파이어 베이스
        } else if (element.current.webkitRequestFullscreen) {
            element.current.webkitRequestFullscreen(); // 오페라
        } else if (element.current.msRequestFullscreen) {
            element.current.msRequestFullscreen(); // 마이크로 소프트
        }
        runCb(true);
    };
    const exitFull = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen(); // 크롬
        } else if (document.mozRequestFullScreen) {
            document.mozRequestFullScreen(); // 파이어 베이스
        } else if (document.webkitRequestFullscreen) {
            document.webkitRequestFullscreen(); // 오페라
        } else if (document.msRequestFullscreen) {
            document.msRequestFullscreen(); // 마이크로 소프트
        }
        
        runCb(false);
    }

    return { element, triggerFull, exitFull };
}