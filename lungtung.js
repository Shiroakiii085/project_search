var app = "ID";
app = window.prompt("Teleport Gate: Please choose ID!")
if (app == "fb") {
    alert ("Teleport Gate: You choosen Facebook, Good Luck!")
    top.location = "https://www.facebook.com"
} else if (app == "tt") {
    alert ("Teleport Gate: You choosen TikTok, Good Luck!")
    top.location = "https://www.tiktok.com"
} else if (app == "zl") {
    alert ("Teleport Gate: You choosen Zalo, Good Luck!")
    top.location = "https://www.zalo.me"
} else if (app == "ytb") {
    alert ("Teleport Gate: You choosen Youtube, Good Luck!")
    top.location = "https://www.youtube.com"
} else if (app == "codename:crack") {
    alert ("Teleport Gate: You choosen CODENAME:CRACK, Good Luck!")
    top.location = "https://hadoantv.com/"
} else if (app == "sc") {
    alert ("Teleport Gate: You choosen SoundCloud, Good Luck!")
    top.location = "https://soundcloud.com"
} else if (app == "terces"){
    var secret = "secret1"
    secret = window.prompt("Teleport Gate: @!@@$#%##@!#!$$#@")
    if (secret == "rr"){
        alert ("Hidden Voice: You enter the secret code, ID:RickRoll, Good Luck!")
        top.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    } else if (secret == "mixi") {
        alert ("Hidden Voice: Hello MixiMoi Fan...!")
        var mixi = "address"
        mixi = window.prompt("Hidden Voice: Choose the ID you want !")
        if (mixi == "ytb:mixi") {
            alert ("Hidden Voice: Dâu! Hế lô xin chào cả nhà iu")
            top.location = "https://www.youtube.com/@MixiGaming3con"
        } else if (mixi == "fb:mixi") {
            alert ("Hidden Voice: You choose Facebook of MixiMoi, Good Luck!")
            top.location = "https://www.facebook.com/MixiGaming/"
        } else if (mixi == "dotoc:mixi") {
            alert ("Hidden Voice: Lướt Group tí đê!")
            top.location = "https://www.facebook.com/groups/mixigaming"
        } else if (mixi == "nimo:mixi") {
            alert ("Hidden Voice: Chuyển sới đê cả lò nhà mình ơi, ai xem tiếp qua Nimotv/mixi nhá!")
            top.location = "https://www.nimo.tv/mixi"
        } else if (mixi == "restream:mixi") {
            alert ("Hidden Voice: Restream!")
            top.location = "https://mixigaming.com/"
        } else {
            alert ("Hidden Voice: ID không tồn tại! Hãy trở lại Teleport Gate")
            top.location = " "
        }
    } else if (secret =="ani") {
        alert ("Hidden Voice: It's Wibu Time!")
        var anime = "ani"
        anime = window.prompt("Hidden Voice: Choose the ID you want!")
        if (anime == "ytb:ani") {
            alert ("Hidden Voice: Yes sir, go to Muse VN!")
            top.location = "https://www.youtube.com/c/MuseVi%E1%BB%87tNam"
        } else if (anime == "web:ani") {
            alert ("Hidden Voice: Oke bro, go to AnimeHay.tv")
            top.location = "https://animehay.tv/"
        } else {
            alert ("Hidden Voice: ID không tồn tại! Hãy trở lại Teleport Gate")
            top.location = " "
        }
    } else {
        alert ("Teleport Gate: Secret ID Invalid! Return to Teleport Gate!")
        top.location = " "
    }
} else if (app == "lms"){
    alert ("Teleport Gate: You choose LMS-DNU!!! Let's go!")
    top.location = "https://fitdnu.net/"
} else if (app == "github"){
    alert ("Teleport Gate: You choose Github, Let's go Coder!!!")
    top.location = "https://github.com" 
} else {
    alert ("Teleport Gate: ID không tồn tại! Hãy nhập đúng!!!")
    top.location = " "
}