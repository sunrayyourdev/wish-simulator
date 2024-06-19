import random
from Items import *


class Banner:
    three_stars = ['Debate Club', 'Cool Steel', 'Thrilling Tales of Dragon Slayers']
    four_star_characters = ['Fischl', 'Xiangling', 'Sucrose', 'Bennet', 'Chongyun', 
                            'Barbara', 'Xinyan', 'Diona', 'Xingqiu', 'Ningguang', 
                            'Razor', 'Beidou']
    starter_characters = ['Kaeya', 'Lisa', 'Amber']
    five_star_characters = ['Diluc', 'Qiqi', 'Keqing', 'Jean', 'Mona', 'Dehya']

    def __init__(self) -> None:
        self.history = []
        self.five_star_pity = 89
        self.four_star_pity = 9

    def roll(self):
        pass


class StandardBanner(Banner):
    four_star_characters = Banner().four_star_characters + Banner().starter_characters
    four_star_weapons = ['Sacrificial Fragments', 'Rust', 'The Bell']
    five_star_weapons = ['Skyward Atlas', "Wolf's Gravestone", 'Amos Bow']

    def __init__(self) -> None:
        super().__init__()

    def roll(self):
        if self.five_star_pity == 0:
            self.five_star_pity = 89
            if fifty_fifty() == 'win':
                return FiveStar(random.choice(self.five_star_characters))
            return FiveStar(random.choice(self.five_star_weapons))
        self.five_star_pity -= 1
        if self.four_star_pity == 0:
            self.four_star_pity = 9
            if fifty_fifty() == 'win':
                return FourStar(random.choice(self.four_star_characters))
            return FourStar(random.choice(self.four_star_weapons))
        self.four_star_pity -= 1
        return ThreeStar(random.choice(self.three_stars))


class VentiBanner(Banner):
    featured_five_star = 'Venti'
    featured_four_stars = ['Fischl', 'Xiangling', 'Sucrose']

    def __init__(self) -> None:
        super().__init__()

    def roll(self):
        if self.five_star_pity == 0:
            self.five_star_pity = 89
            if fifty_fifty() == 'win':
                return FiveStar(self.featured_five_star)
            return FiveStar(random.choice(self.five_star_characters))
        self.five_star_pity -= 1
        if self.four_star_pity == 0:
            self.four_star_pity = 9
            if fifty_fifty() == 'win':
                return FourStar(random.choice(self.featured_four_stars))
            return FourStar(random.choice(self.four_star_characters))
        self.four_star_pity -= 1
        return ThreeStar(random.choice(self.three_stars))


def fifty_fifty():
    return random.choice(['win', 'lose'])