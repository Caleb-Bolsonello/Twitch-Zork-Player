#!/usr/bin/env python

import firebase_admin
from firebase_admin import credentials, firestore

from pynput.keyboard import Key, Controller
import time

cred = credentials.Certificate("./node-typer-firebase-admin.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

print("Py Typer Active")

def printMessage( message ):
	keyboard = Controller()

	for char in message:
		keyboard.press(char)
		keyboard.release(char)
		time.sleep(0.12)

	keyboard.press(Key.enter)
	keyboard.release(Key.enter)


# -------------------------------------------------------------------------------------------------------

while True:
	docs = db.collection(u'UserMsg').stream()

	for doc in docs:
		#Log document information and parse out message
		print(u'{} => {}'.format(doc.id, doc.to_dict()))
		message = doc.to_dict().values()
		newMessage = ''.join(message)
		print(newMessage)
	
		#Type Message
		printMessage(str(newMessage))

		#Delete Document
		doc.reference.delete()
