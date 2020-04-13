import json

with open('test.txt', 'rw') as reader:
    text_from_file = reader.read().split("\n")

def read_json():
    json_file = open('../test.json')
    data = json.load(json_file)
    find_all_lines(data)


def find_all_lines(data):
    if len(data.keys()) >= 1:
        for key, value in data.iteritems():
            if type(value) is dict:
                find_all_lines(value)
            else:
                print(key)
                print(value)

read_json()