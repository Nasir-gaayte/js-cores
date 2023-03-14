from PIL import Image
from rembg import remove

im_in= Image.open('inphto/car6.jpeg')
im_out = remove(im_in)
im_out.save("/home/nasir/work/jscode/one/inphoto")