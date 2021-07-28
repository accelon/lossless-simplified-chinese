# 无损简體 lossless-simplified-chinese

## 功能
確保繁簡一對一轉換。

## 使用情境
數據庫以繁體儲存，顯示之前再轉為簡體。
無詞庫校正，適合古籍。
使用者輸入簡體，展開為可能的繁體字，再以Regular express 搜尋。

## 用法

    import {toSim,fromSim} from 'lossless-simplified-chinese'
    
    String toSim(String, safe=false)    
    String fromSim(String, mode=0|1|2)
       mode 0 : 只轉一對一
       mode 1 : 轉為最常用的繁體字 (可能會錯)
       mode 2 : 列舉所有繁體字

## 範例
    
    toSim('無損簡體')=='无损简體'        //轉成無損簡體
    fromSim('无损简體')=='無損簡體'      //無損轉回繁體
    fromSim('无损简体')=='無損簡体'      //安全轉回繁體
    fromSim('无损简体',1)=='無損簡體'      //轉回繁體
    fromSim('无损简体',2)=='無損簡[体體]'  //展開所有可能
    toSim('無損簡體',true)=='无损简体'   //強制轉換

    fromSim('树干')=='樹干'        // 「树」確定能轉成「樹」。干 可轉成多個繁體，保留不變。
    fromSim('树干',1)=='樹乾'      // 取「干」最常用的繁體對應，但不正確
    fromSim('树干',2)=='樹[乾幹干]' //
 
    fromSim('饼干',1)=='餅乾'       //剛好正確
    fromSim('饼干',2)=='餅[乾幹干]'
