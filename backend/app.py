from PIL import Image

import pybase64


def work_in_img(img, cordes, rgb, lenY):
    X0 = int(cordes[0])
    Y0 = int(cordes[1])
    X1 = int(cordes[2])
    Y1 = int(cordes[3])
    R = int(rgb[0])
    G = int(rgb[1])
    B = int(rgb[2])
    lenY = int(lenY)
    print('XY0= [ ', X0, ' : ', Y0, ' ]\n',
          'X1= [ ', X1, ' : ', Y0, ' ]\n',
          'Y1= [ ', X0, ' : ', Y1, ' ]\n',
          'RGB= [ ', R, ' , ', G, ' , ', B, ' ]\n',
          'lenY=[', lenY, ']')
    create_img(img)
    crop_img(X0, Y0, X1, Y1)
    tower = width_tower(R, G, B)
    print('width_tower=[ ', tower, ' ]')
    scaning_pixel(R, G, B, tower, lenY)


def create_img(image):
    Img = pybase64.b64decode(image.replace('data:image/png;base64,', ''))
    with open('img.png', 'wb') as f:
        f.write(Img)
        f.close()


def crop_img(X0, Y0, X1, Y1):
    image = Image.open('img.png')
    crop = image.crop((X0, Y1, X1, Y0))
    crop.convert('L').save('crop_img.png')


def scaning_pixel(R, G, B, tower, lenY):
    image = Image.open('crop_img.png')
    rgb_image = image.convert('RGB')
    (width, height) = image.size
    print('size_crop_img=[ ', width, ' : ', height, ' ]')
    i = round(tower / 2)
    segmentY = round(height / lenY)
    print('height_in_pixel_segment_Y=[ ', segmentY, ' ]\n','taken_values_peak=[ ',end=' ')
    while True:
        j = 0
        while True:
            if j + 1 < height:
                j += 1
            else:
                break
            r, g, b = rgb_image.getpixel((i, j))
            if R != r or G != g or B != b:

                break
        if i + tower < width:
            if(round((height - j) / segmentY)!=0):
                print(round((height - j) / segmentY), end=', ')
            i = i + tower
        else:
            if (round((height - j) / segmentY) != 0):
                print(round((height - j) / segmentY), end=', ')
            break


def width_tower(R, G, B):
    image = Image.open('crop_img.png')
    rgb_image = image.convert('RGB')
    (width, height) = image.size
    i = 10
    j = height - 10
    while i < width:
        i += 1
        r, g, b = rgb_image.getpixel((i, j))
        if R != r or G != g or B != b:
            t0 = i
            while True:
                i = i + 1
                r, g, b = rgb_image.getpixel((i, j))
                if R == r or G == g or B == b:
                    return i-t0