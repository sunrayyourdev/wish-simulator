from models.Banners import StandardBanner, VentiBanner


class User:
    def __init__(self) -> None:
        self.banners = {'standard': StandardBanner(), 'venti': VentiBanner()}
        self.last_wish_result = []

    def wish(self, banner, quantity):
        wish_result = []
        for _ in range(quantity):
            item = banner.roll()
            wish_result.append(item)
        banner.history += wish_result
        self.last_wish_result = wish_result