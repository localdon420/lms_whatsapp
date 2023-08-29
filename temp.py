import requests

cookies = {
    'MoodleSession': '25f942t42haii5id8s6uptaj4t',
    '_hjSessionUser_2900707': 'eyJpZCI6IjE4MDFlMmNmLTI2NGItNWEwNi1hMjRmLWZmMDkzNTVkZTg1ZCIsImNyZWF0ZWQiOjE2NzI2NDYxNjE2NDEsImV4aXN0aW5nIjpmYWxzZX0=',
    '_gcl_au': '1.1.453547259.1690365952',
    '_fbp': 'fb.1.1690365952500.288436531',
    '_ga_GJRG3ZQJED': 'GS1.1.1690658802.4.0.1690658802.60.0.0',
    '_ga_XGHSF7GTCN': 'GS1.2.1690658802.4.0.1690658802.60.0.0',
    '_ga_5K6V5S5WTM': 'GS1.1.1690658802.4.1.1690658823.39.0.0',
    '_ga': 'GA1.2.726521307.1671989154',
    '_gid': 'GA1.2.451718135.1693284888',
    '_gat': '1',
    '_ga_FJWJWLKRVL': 'GS1.2.1693295926.9.1.1693296030.0.0.0',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    # 'Cookie': 'MoodleSession=25f942t42haii5id8s6uptaj4t; _hjSessionUser_2900707=eyJpZCI6IjE4MDFlMmNmLTI2NGItNWEwNi1hMjRmLWZmMDkzNTVkZTg1ZCIsImNyZWF0ZWQiOjE2NzI2NDYxNjE2NDEsImV4aXN0aW5nIjpmYWxzZX0=; _gcl_au=1.1.453547259.1690365952; _fbp=fb.1.1690365952500.288436531; _ga_GJRG3ZQJED=GS1.1.1690658802.4.0.1690658802.60.0.0; _ga_XGHSF7GTCN=GS1.2.1690658802.4.0.1690658802.60.0.0; _ga_5K6V5S5WTM=GS1.1.1690658802.4.1.1690658823.39.0.0; _ga=GA1.2.726521307.1671989154; _gid=GA1.2.451718135.1693284888; _gat=1; _ga_FJWJWLKRVL=GS1.2.1693295926.9.1.1693296030.0.0.0',
    'Origin': 'https://lms.thapar.edu',
    'Referer': 'https://lms.thapar.edu/moodle/',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

data = {
    'logintoken': 'Ux5CGINWuUoDYEySHO5WndLsQIqMqrkY',
    'username': 'dgoyal5_be22@thapar.edu',
    'password': '@Anu123456',
}

response = requests.post('https://lms.thapar.edu/moodle/login/index.php', cookies=cookies, headers=headers, data=data)

print(response.text)