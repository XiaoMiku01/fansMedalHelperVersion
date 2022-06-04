---
sidebar: false
---

# 粉丝牌等级计算器

<iframe frameborder="no" height="100%" scrolling="no" srcdoc='
<div>
    当前等级：<input type="number" id="level" value="1" />
    <br />
    当前亲密度：<input type="number" id="exp" value="0" />
    <br />
    目标等级：<input type="number" id="targetLevel" value="1" />
    <br />
    目标亲密度：<input type="number" id="targetExp" value="0" />
    <br />
    <button onclick="calc()">计算</button>
    <br />
    <div id="result"></div>
    <script>
        const leveMap = {
            1: 201,
            2: 300,
            3: 500,
            4: 700,
            5: 1000,
            6: 1500,
            7: 1600,
            8: 1700,
            9: 1900,
            10: 5500,
            11: 10000,
            12: 10000,
            13: 10000,
            14: 15000,
            15: 40000,
            16: 50000,
            17: 100000,
            18: 250000,
            19: 500000,
        };
        let level = document.getElementById("level");
        let exp = document.getElementById("exp");
        let targetLevel = document.getElementById("targetLevel");
        let targetExp = document.getElementById("targetExp");
        let result = document.getElementById("result");
        const calc = () => {
            let allExp = Number(-exp.value);
            for (let i = Number(level.value); i < Number(targetLevel.value); i++) {
                allExp += leveMap[i];
                console.log(allExp);
            }
            allExp += Number(targetExp.value);
            result.innerHTML = `需要：${allExp} 亲密度 \n 预计：${Math.ceil(
                allExp / 1300
            )} 天 (每天1300)`;
        };
    </script>
</div>
'>
</iframe>
