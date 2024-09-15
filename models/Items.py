import datetime


class Item:
    def __init__(self, name) -> None:
        self.name = name
        self.rarity = 0

    def __str__(self):
        return self.name


class FiveStar(Item):
    def __init__(self, name) -> None:
        super().__init__(name)
        self.rarity = 5


class FourStar(Item):
    def __init__(self, name) -> None:
        super().__init__(name)
        self.rarity = 4


class ThreeStar(Item):
    def __init__(self, name) -> None:
        super().__init__(name)
        self.rarity = 3


if __name__ == '__main__':
    # print(Item('John').date)
    pass