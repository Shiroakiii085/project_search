var app = "ID";
app = window.prompt("Teleport Gate: Please choose ID!")
if (app == "fb") {
    alert ("Teleport Gate: Lét gâu to Phở Bò!")
    top.location = "https://www.facebook.com"
} else if (app == "tt") {
    alert ("Teleport Gate: Tóp Tóp is Coming!")
    top.location = "https://www.tiktok.com"
} else if (app == "zl") {
    alert ("Teleport Gate: Zép lào??!")
    top.location = "https://www.zalo.me"
} else if (app == "ytb") {
    alert ("Teleport Gate: Diu túp for you!")
    top.location = "https://www.youtube.com"
} else if (app == "codename:crack") {
    alert ("Teleport Gate: You choosen CODENAME:CRACK, Good Luck!")
    top.location = "https://hadoantv.com/"
} else if (app == "sc") {
    alert ("Teleport Gate: Let's the Music Time Begin!")
    top.location = "https://soundcloud.com"
} else if (app == "terces"){
    var secret = "secret1"
    alert("Teleport Gate: ERROR@!@@$#%##@!#!$$#@")
    alert ("Teleport Gate is disappear, The mysterious voice echoed throughout the space!!!")
    secret = window.prompt("Mysterious Vocie: Choose your Secret ID")
    if (secret == "rr"){
        alert ("Mysterious Voice: You enter the secret code, ID:R.R, Just For Fun!")
        top.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    } else if (secret == "mixi") {
        alert ("Mysterious Voice: Hello MixiMoi Fan...!")
        var mixi = "address"
        mixi = window.prompt("Mysterious Voice: Choose the ID you want, type:mixi!")
        if (mixi == "ytb:mixi") {
            alert ("Mysterious Voice: Dâu! Hế lô xin chào cả nhà iu")
            top.location = "https://www.youtube.com/@MixiGaming3con"
        } else if (mixi == "fb:mixi") {
            alert ("Mysterious Voice: You choose Facebook of MixiMoi, Good Luck!")
            top.location = "https://www.facebook.com/MixiGaming/"
        } else if (mixi == "dotoc:mixi") {
            alert ("Mysterious Voice: Lướt Group tí đê!")
            top.location = "https://www.facebook.com/groups/mixigaming"
        } else if (mixi == "nimo:mixi") {
            alert ("Mysterious Voice: Chuyển sới đê cả lò nhà mình ơi, ai xem tiếp qua Nimotv/mixi nhá!")
            top.location = "https://www.nimo.tv/mixi"
        } else if (mixi == "restream:mixi") {
            alert ("Mysterious Voice: Restream!")
            top.location = "https://mixigaming.com/"
        } else {
            alert ("Mysterious Voice: ID Invalid! Return to Teleport Gate")
            top.location = " "
        }
    } else if (secret =="ani") {
        alert ("Mysterious Voice: It's Quý Bửu Time!")
        var anime = "ani"
        anime = window.prompt("Mysterious Voice: Choose the ID you want, type:ani!")
        if (anime == "ytb:ani") {
            alert ("Mysterious Voice: Yes sir, go to Muse VN!")
            top.location = "https://www.youtube.com/c/MuseVi%E1%BB%87tNam"
        } else if (anime == "web:ani") {
            alert ("Mysterious Voice: Oke bro, go to AnimeHay.tv")
            top.location = "https://animehay.tv/"
        } else {
            alert ("Mysterious Voice: ID Invalid! Return to Teleport Gate")
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
} else if (app == "poke:rogue"){
    alert ("Teleport Gate: You choose Pokémon Rogue, Good Luck!")
    top.location = "https://pokerogue.net/"
} else {
    alert ("Teleport Gate: ID Invalid!!!")
    top.location = " "
}