import { useEffect } from 'react';

// 마우스가 특정 위치로 이동 했을때 이벤트를 발생시킬 수 있음

// 마우스가 브라우저의 최상단(마우스 좌표 y)으로 이동 했을때 메시지를 출력함
export const useBeforeLeave = onBefore => {

    const handel = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    }
    useEffect(() => {
        if (typeof onBefore !== "function") {
            return;
        }
        document.addEventListener("mouseleave", handel); // mouseleave: 마우스 좌표를 가진다.
        return () => document.removeEventListener("mouseleave", handel);
    }, []);
}