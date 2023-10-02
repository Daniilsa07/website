let username = prompt("Свой никнейм: ")
let years = parseInt(prompt("Свой возраст: "))
alert("Привет, " + username + ", тебе " + years + " лет.")
let myAdmin = confirm("Вы робот?")
if (myAdmin)
{
    alert("Добро пожаловать на сайт!")
}
else
{
    close()
}