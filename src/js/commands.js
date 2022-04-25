// Search something on google, if no arguments are provided => www.google.com
g = google;
function google(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        search = args.replace("+", "%2B")
        window.location.href = "https://www.google.com/search?q=" + search;
    } else {
        window.open("https://www.google.com");
    }
}

// Display time
time = clock;
function clock(args) {
    var today = new Date();
    block_log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

// Clear the terminal
cls = clear
clr = clear
function clear(args) {
    document.getElementById('wrapper').innerHTML = "";
}

// Search on DuckDuckGo
ddg = duckduckgo;
s = duckduckgo;
d = duckduckgo;
search = duckduckgo;
function duckduckgo(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        search = args.replace("+", "%2B")
        window.open("https://duckduckgo.com/?q=" + search);
    } else {
        window.open("https://duckduckgo.com/");
    }
}

// Search on Wikipedia
w = wikipedia;
wiki = wikipedia;
function wikipedia(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        search = args.replace("+", "%2B")
        window.open("https://wikipedia.org/w/index.php?search=" + search);
    } else {
        window.open("https://wikipedia.org/");
    }
}

// Search on Github
gh = github;
function github(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        search = args.replace("+", "%2B")
        window.open("https://github.com/search?q=" + search);
    } else {
        window.open("https://github.com/");
    }
}

lds = churchofjesuschrist
function churchofjesuschrist(argsArray) {
    main = argsArray[0]
    sub = argsArray[1]
    scripture = args.replace(main, "").replace(/ /g, "")
    if (main == "search" || main == "s" || main == "") {
        if (sub != undefined) {
            search = sub.replace(" ", "+")
            search = sub.replace("+", "%2B")
            window.open("https://www.churchofjesuschrist.org/search?query=" + search);
        } else {
            window.open("https://www.churchofjesuschrist.org/");
        }
    } else if (main == "bom") {
        window.open("https://www.churchofjesuschrist.org/study/scriptures/bofm/" + scripture)
    } else if (main == "help") {
        block_log(`lds, churchofjesuchrist - search or open scriptures on churchofjesuschrist.org
        <br><br> Subcommands:
        <br><br>  \`search\`, \`s\` - search for ARGS on churchofjesuschrist.org
        <br>  \`bom\` - open ARGS book/chapter of the Book of Mormon. See 'Book Codes' section for info about book names
        <br><br> Examples:
        <br><br>  \`lds search tower\` - search for 'tower' on churchofjesuschrist.org
        <br>  \`lds bom alma/31\`
        <br><br> Book Codes:
        <br><br>  Book of Mormon:
        <br><br>   \`1-ne\` - 1 Nephi
        <br>   \`2-ne\` - 2 Nephi
        <br>   \`jacob\` - Jacob
        <br>   \`enos\` - Enos
        <br>   \`jarom\` - Jarom
        <br>   \`omni\` - Omni
        <br>   \`w-of-m\` - Words of Mormon
        <br>   \`mosiah\` - Mosiah
        <br>   \`alma\` - Alma
        <br>   \`hel\` - Helaman
        <br>   \`3-ne\` - 3 Nephi
        <br>   \`4-ne\` - 4 Nephi
        <br>   \`morm\` - Mormon
        <br>   \`moro\` - Moroni`)
    }
}

function help() {
    block_log(`websh: the modern webshell emulator
    <br/><br/> websh tools:
    <br/><br/> \`echo\` - print specified text
    <br/>  \`clock\` - print time
    <br/>  \`link\` - open the specified full URL, i.e. 'https://github.com'
    <br/>  \`bk\`, \`bookmark\` - Create, manage, and use websh bookmarks. \`bookmark help\` for more info.
    <br>  \`theme\` - set terminal theme. \`theme help\` for more info.
    <br>  \`vscode\`, \`code\`, or \`vs\` - Use VS Code in your browser, or on your computer.
    <br>  \`snap\` - open snaps in the Snap Store
    <br/><br/> Search engines:
    <br/><br/>  \`g\`, or \`google\` - go to https://google.com, or search for ARGS
    <br/>  \`s\`, \`search\`, \`d\`, \`ddg\`, or \`duckduckgo\` - go to https://duckduckgo.com, or search for ARGS
    <br/>  \`w\`, or \`wikipedia\` - go to https://wikipedia.org, or search for ARGS
    <br/>  \`gh\`, or \`github\` - go to https://github.com, or search for ARGS
    <br/><br/> Settings:
    <br/><br/>  \`textcolor\` - set the terminal text color
    <br/>  \`bgcolor\` - Set the background color
    <br/>  \`termcolor\` - Set the Terminal color
    <br>  \`textboxcolor\` - set the color of text boxes
    <br/><br/>Note: for color setting use CSS Colors, or HEX Codes.<br/>`)
}


textcolor = setTxtColor
set_txtColor = setTxtColor
function setTxtColor(args) {
    if (args != undefined) {
        document.documentElement.style.setProperty("--text-color", args)
        document.cookie = "textcolor=" + args + "; SameSite=None; Secure"
    }
}

bgcolor = setBgColor
set_bgColor = setBgColor
function setBgColor(args) {
    if (args != undefined) {
        document.documentElement.style.setProperty("--main-bg-color", args)
        document.cookie = "bgcolor=" + args + "; SameSite=None; Secure"
    }
}

termcolor = setTermColor
set_termColor = setTermColor
function setTermColor(args) {
    if (args != undefined) {
        document.documentElement.style.setProperty("--prompt-bg-color", args)
        document.cookie = "promptcolor=" + args + "; SameSite=None; Secure"
    }
}

textboxcolor = setTextBoxColor
set_textboxcolor = setTextBoxColor
function setTextBoxColor(args) {
    if (args != undefined) {
        document.documentElement.style.setProperty("--box-color", args)
        document.cookie = "textboxcolor=" + args + "; SameSite=None; Secure"
    }
}

web = link
function link(args) {
    if (args != "") {
        if (args.includes("://")) {
            window.open(args)
        } else {
            error("E: bad URL!")
        }
    } else if (args != `*`) {
        error("E: no URL specified!")
    }
}

bk = bookmark
function bookmark(argsArray) {
    main = argsArray[0]
    sub = argsArray[1]
    if (main == "add" || main == "new") {
        document.getElementById("bookmarkName").value = ""
        document.getElementById("bookmarkURL").value = ""
        $('#bookmarkBox').show();

        document.getElementById("bookmarkAddOk").addEventListener('click', (e) => {
            var bookmarkName = document.getElementById("bookmarkName").value
            var bookmarkURL = document.getElementById("bookmarkURL").value
            e.stopPropagation(); // so the big HTML element doesn't get it
            document.cookie = "bookmark" + bookmarkName + "=" + bookmarkURL + "; SameSite=None; Secure"
            $('#bookmarkBox').hide()
        })
        document.getElementById("bookmarkAddCancel").addEventListener('click', (e) => {
            $('#bookmarkBox').hide()
        })
    } else if (main == "open") {
        let bookmarkURL = document.cookie
            .split('; ')
            .find(row => row.startsWith(`bookmark${sub}=`.split(" ").join("")))
            .split('=')[1]
        console.log("Opening: " + bookmarkURL)
        link(bookmarkURL)
    } else if (main == "delete") {
        let bookmarkURL = document.cookie
            .split('; ')
            .find(row => row.startsWith(`bookmark${sub}=`.split(" ").join(""))
            ).split('=')[1]
        document.cookie = `bookmark${sub}=${bookmarkURL}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
    } else if (main == "list") {
        bookmarkList = document.cookie
        bookmarkListArray = bookmarkList
            .split(";")
        bookmarkListArrayFiltered = new Array()
        a = 0
        for (i = 0; i < bookmarkListArray.length; i++) {
            if (bookmarkListArray[i].includes("bookmark")) {
                bookmarkListArrayFiltered[a] = bookmarkListArray[i]
                a++
            }
        }
        for (i = 0; i < bookmarkListArrayFiltered.length; i++) {
            block_log(bookmarkListArrayFiltered[i].replace(/;/g, "<br>").replace(/"/g, "")/*.replace(/ /g, "")*/.replace(/=/g, '", URL: ').replace("bookmark", 'Name: "'))
        }
    } else if (main == "help" || main == "?" || main == "--help" || main == "-h") {
        block_log("bookmark - the websh bookmark tool<br><br> Subcommands:<br><br>  add, or new - create a bookmark<br>  remove - remove the specified bookmark<br>  list - list all bookmarks<br>  open - open the specified bookmark<br><br> Examples:<br><br>  Open a bookmark named 'GitHub':<br>   `bk open GitHub`<br>  Remove a bookmark named 'GitHub':<br>   `bk remove GitHub`")
    } else {
        error("E: no argument specified, or bad argument!")
    }
}


function theme(argsArray) {
    main = argsArray[0]
    sub = argsArray[1]
    if (main == "new") {
        document.getElementById("themeName").value = ""
        document.getElementById("themeTextColor").value = ""
        document.getElementById("themeTermColor").value = ""
        document.getElementById("themeBgColor").value = ""
        $('#themeBox').show();

        document.getElementById("themeAddOk").addEventListener('click', (e) => {
            var themeName = document.getElementById("themeName").value
            var themeTextColor = document.getElementById("themeTextColor").value
            var themeTermColor = document.getElementById("themeTermColor").value
            var themeBgColor = document.getElementById("themeBgColor").value
            var themeTextBgColor = document.getElementById("themeTextBgColor").value
            document.cookie = `theme-${themeName}-themeTextColor=${themeTextColor}; SameSite=None; Secure`
            document.cookie = `theme-${themeName}-themeTermColor=${themeTermColor}; SameSite=None; Secure`
            document.cookie = `theme-${themeName}-themeBgColor=${themeBgColor}; SameSite=None; Secure`
            document.cookie = `theme-${themeName}-themeTextBgColor=${themeTextBgColor}; SameSite=None; Secure`
            $('#themeBox').hide()
        })
        document.getElementById("themeAddCancel").addEventListener('click', (e) => {
            $('#themeBox').hide()
        })
    } else if (main == "set") {
        if (sub == "default") {
            bgcolor("#507496bd")
            textcolor("#138f4d")
            termcolor("#262626")
            textboxcolor("rgb(59, 59, 59)")

        } else if (sub == "teal-dark") {
            bgcolor("#0f3a48")
            textcolor("#3391ff")
            termcolor("#000")
            textboxcolor("rgb(59, 59, 59)")
        }
    } else if (main == "list") {
        themeList = document.cookie
        themeListArray = themeList
            .split(";")
        themeListArrayFiltered = new Array()
        a = 0
        for (i = 0; i < themeListArray.length; i++) {
            if (themeListArray[i].includes("theme-")) {
                themeListArrayFiltered[a] = themeListArray[i]
                a++
            }
        }
        for (i = 0; i < themeListArrayFiltered.length; i++) {
            block_log(themeListArrayFiltered[i].replace(/;/g, "<br>").replace(/"/g, "").replace(/=/g, '", Theme code: ').replace("bookmark", 'Name: "'))
        }

    } else if (main == "load") {
        themeLoad = document.cookie
        themeLoadArray = themeLoad
            .split(";")
        themeLoadArrayFiltered = new Array()
        a = 0
        for (i = 0; i < themeLoadArray.length; i++) {
            if (themeLoadArray[i].includes(`theme-${sub}`)) {
                themeLoadArrayFiltered[a] = themeLoadArray[i]
                a++
            }
        }
        //set theme vars
        themeTextColor = themeLoadArrayFiltered[0].replace(`theme-${sub}-themeTextColor=`, "")
        themeTermColor = themeLoadArrayFiltered[1].replace(`theme-${sub}-themeTermColor=`, "")
        themeBgColor = themeLoadArrayFiltered[2].replace(`theme-${sub}-themeBgColor=`, "")
        themeTextBgColor = themeLoadArrayFiltered[3].replace(`theme-${sub}-themeTextBgColor=`, "")
        // set theme
        block_log(`Text Color: ${themeTextColor}
        <br>Terminal Color: ${themeTermColor}
        <br>Background Color: ${themeBgColor}
        <br>Textbox Color: ${themeTextBgColor}`)
        textcolor(themeTextColor)
        termcolor(themeTermColor)
        bgcolor(themeBgColor)
        textboxcolor(themeTextBgColor)
    } else if (main == "delete") {
        let themeTextColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${sub}-themeTextColor=`.split(" ").join(""))
            ).split('=')[1]
        let themeTermColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${sub}-themeTermColor=`.split(" ").join(""))
            ).split('=')[1]
        let themeBgColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${sub}-themeBgColor=`.split(" ").join(""))
            ).split('=')[1]
        let themeTextBgColor = document.cookie
            .split('; ')
            .find(row => row.startsWith(`theme-${sub}-themeTextBgColor=`.split(" ").join(""))
            ).split('=')[1]

        // Do the deleting
        document.cookie = `theme-${sub}-themeTextColor=${themeTextColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
        document.cookie = `theme-${sub}-themeTermColor=${themeTermColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
        document.cookie = `theme-${sub}-themeBgColor=${themeBgColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
        document.cookie = `theme-${sub}-themeTextBgColor=${themeTextBgColor}; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure`
    } else if (main == "help") {
        block_log(`theme - the websh theme tool
        <br><br> Subcommands:
        <br><br>  new - create a new theme
        <br>  load - load a saved theme
        <br>  set - load a built-in theme
        <br>  delete - delete a saved theme
        <br>  help - print this help
        <br><br> Examples:
        <br><br>  \`theme set default\` - sets the default theme
        <br>  \`theme new\` - create a new theme
        <br>  \`theme load SeaGreen\` - loads a user-created theme called 'SeaGreen'
        <br>  \`theme delete SeaGreen\` - deletes a user-created theme called 'SeaGreen'`)
    } else {
        error("E: no argument specified, or bad argument!")
    }
}

vs = vscode
code = vscode
function vscode(argsArray) {
    main = argsArray[0]
    sub = argsArray[1]
    if (main == "local") {
        window.open("vscode://open")
    } else if (main == "help") {
        block_log(`vscode, code, vs - the Visual Studio Code helper
        <br><br> Subcommands:
        <br><br>  \`local\` - open VS Code locally on your computer.
        <br>   Note: requires VS Code to be installed on your computer
        <br><br> Examples:
        <br><br>  \`code\` - open 'https://vscode.dev'
        <br>  \`code local\` - opens VS Code on your computer, with 'vscode://open'`)
    } else {
        window.open("https://vscode.dev")
    }
}

function snap(argsArray) {
    if (navigator.userAgent.includes("Linux")) {
        main = argsArray[0]
        sub = argsArray[1]
        if (main == "open") {
            window.open(`snap://${sub}`)
        } else if (main == "help") {
            block_log(`snap - a snap helper for websh
            <br><br> Subcommands:
            <br><br>  open - open a specified snap in the Snap Store
            <br>   Note: snapd, as well as the snap store must be installed to use this feature.
            <br><br> Examples:
            <br><br>  \`snap open telegram-desktop\` - opens the snap 'telegram-desktop' in the Snap Store`)
        } else {
            error("E: no argument specified, or bad argument!")
        }
    } else {
        error("E: you're not using Linux, so you can't use snapd!")
    }
}