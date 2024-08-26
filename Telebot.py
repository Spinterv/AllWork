from pyowm.owm import OWM
import telebot
from datetime import datetime, time
from pyowm.utils.config import get_default_config
#from goto import with_goto

bot  = telebot.TeleBot("...")
owm = OWM('...')

@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
	bot.send_message(message.chat.id, "Это мой бот, я сделал его *САМ!*\nОн уже умеет здороваться на практически любое *ТВОЕ* приветствие)\nА еще можно узнать *время*.\n\n _а дальше может быть что-то еще)_", parse_mode="Markdown")

@bot.message_handler(content_types=['text'])
#@with_goto
def starttt(message):

	#Приветствие
	if message.text ==  "Привет"    or \
	   message.text ==  "привет"    or \
	   message.text ==  "Здарова"   or \
	   message.text ==  "здарова"   or \
	   message.text ==  "Хай"       or \
	   message.text ==  "хай"       or \
	   message.text ==  "Хелоу"     or \
	   message.text ==  "хелоу"     or \
	   message.text ==  "Хеллоу"    or \
	   message.text ==  "хеллоу"    or \
	   message.text ==  "Хей"       or \
	   message.text ==  "хей"       or \
	   message.text ==  "Салам"     or \
	   message.text ==  "салам"     or \
	   message.text ==  "Ку"        or \
	   message.text ==  "ку"        or \
	   message.text ==  "Дарова"    or \
	   message.text ==  "дарова"    or \
	   message.text ==  "Хэй"       or \
	   message.text ==  "хэй"       or \
	   message.text ==  "Че как?"   or \
	   message.text ==  "че как?"   or \
	   message.text ==  "Че каво?"  or \
	   message.text ==  "че каво?"  or \
	   message.text ==  "Здарово"   or \
	   message.text ==  "здарово"   or \
	   message.text ==  "Прив"      or message.text ==  "прив":
		answer = "Ну приветики)\n_хехехе_"
		bot.reply_to(message, answer, parse_mode="Markdown")

	#время
	if message.text == "время" or \
	   message.text == "Время":
		current_time = datetime.now().time()
		bot.reply_to(message, current_time.strftime("%I:%M"))

	#погода
	if message.text == "Санкт-петербург" or \
	   message.text == "погода":
		bot.send_message(message.chat.id, "Напишите город/страну для которой написать погоду:")
		
		
		def place(message):
			place = message.text
			config_dict = get_default_config()
			config_dict['language'] = 'ru'
			mgr = owm.weather_manager()
			try:
				observation = mgr.weather_at_place(place)
				w = observation.weather
				temp = w.temperature('celsius')["temp"]
			
				bot.send_message(message.chat.id, "В городе "+ place + "сейчас " + {w.detailed_status} + "\nТемпература: "+ temp)

			except NotFoundError:
				bot.send_message(message.chat.id,'Не найдено место: ' + place)
				bot.reply_to(message, w)

bot.infinity_polling()