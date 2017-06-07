/**
 * Created by Administrator on 2017/6/7 0007.
 */
((doc, win) => {
    const docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = () => {
            let clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'; // 基于320的屏幕 20px = 1rem
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    //当dom加载完成时，或者 屏幕垂直、水平方向有改变进行html的根元素计算
})(document, window);