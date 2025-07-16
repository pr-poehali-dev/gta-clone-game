import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-600 via-orange-500 to-amber-400 overflow-hidden">
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
              <Icon name="Car" className="text-orange-500" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black">SAN ANDREAS</h1>
              <p className="text-sm text-black/70">Online Edition</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Button variant="ghost" className="text-black hover:bg-black/10">
              Главная
            </Button>
            <Button variant="ghost" className="text-black hover:bg-black/10">
              Игра
            </Button>
            <Button variant="ghost" className="text-black hover:bg-black/10">
              Настройки
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-6">
        {/* Background Images */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/img/77ae3eba-7117-4822-8e21-a86956b08d61.jpg" 
            alt="San Andreas City" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Character Image */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-60 hidden lg:block">
          <img 
            src="/img/0e03cec8-1771-4b2c-9e5c-caee37109c87.jpg" 
            alt="GTA Character" 
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-4 h-full">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="bg-black/20 rounded"></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-black text-black mb-4 tracking-tight">
              SAN
            </h1>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight -mt-4">
              ANDREAS
            </h2>
            <p className="text-2xl md:text-3xl text-black/80 font-bold mb-8">
              Добро пожаловать в мир криминального Лос-Сантоса
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-12">
            <Button 
              size="lg" 
              className="bg-black text-orange-500 hover:bg-gray-900 border-2 border-orange-500 px-12 py-6 text-xl font-bold"
            >
              <Icon name="Play" className="mr-2" size={24} />
              НАЧАТЬ ИГРУ
            </Button>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="border-black text-black hover:bg-black hover:text-orange-500 px-8 py-4 font-bold"
              >
                <Icon name="Users" className="mr-2" size={20} />
                Мультиплеер
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-black text-black hover:bg-black hover:text-orange-500 px-8 py-4 font-bold"
              >
                <Icon name="Settings" className="mr-2" size={20} />
                Настройки
              </Button>
            </div>
          </div>

          {/* Game Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-black/20 border-black/30 p-6 hover:bg-black/30 transition-all">
              <div className="text-center">
                <Icon name="Car" className="mx-auto mb-4 text-orange-500" size={40} />
                <h3 className="text-xl font-bold text-black mb-2">Вождение</h3>
                <p className="text-black/70">Управляй десятками автомобилей по всему городу</p>
              </div>
            </Card>
            
            <Card className="bg-black/20 border-black/30 p-6 hover:bg-black/30 transition-all">
              <div className="text-center">
                <Icon name="Target" className="mx-auto mb-4 text-orange-500" size={40} />
                <h3 className="text-xl font-bold text-black mb-2">Стрельба</h3>
                <p className="text-black/70">Арсенал оружия для выполнения миссий</p>
              </div>
            </Card>
            
            <Card className="bg-black/20 border-black/30 p-6 hover:bg-black/30 transition-all">
              <div className="text-center">
                <Icon name="Users" className="mx-auto mb-4 text-orange-500" size={40} />
                <h3 className="text-xl font-bold text-black mb-2">NPC</h3>
                <p className="text-black/70">Взаимодействуй с жителями города</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 text-black/60">
          <p className="text-sm font-bold">Онлайн игроков: 1,247</p>
        </div>
        
        <div className="absolute bottom-10 right-10 text-black/60">
          <p className="text-sm font-bold">Версия: 2.0</p>
        </div>
      </div>
    </div>
  );
};

export default Index;