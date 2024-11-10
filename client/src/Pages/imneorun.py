import pyautogui
import time
import random

time.sleep(5)

text_to_type = """
This is the first paragraph. It contains multiple sentences.
Each sentence is separated by a period, and there are multiple lines in this paragraph.

This is the second paragraph. It starts after a blank line.
Maintaining this structure is important for formatting purposes.
"""

words = text_to_type.split()

for word in words:
    pyautogui.typewrite(word)
    pyautogui.press("space")  
    time.sleep(random.uniform(0.05, 0.2))