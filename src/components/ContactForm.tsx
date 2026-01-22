import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const subjects = [
  { name: 'Математика', icon: 'Calculator', color: 'bg-purple-100 text-purple-600' },
  { name: 'Русский язык', icon: 'BookOpen', color: 'bg-blue-100 text-blue-600' },
  { name: 'Английский язык', icon: 'Languages', color: 'bg-green-100 text-green-600' },
  { name: 'Информатика', icon: 'Code', color: 'bg-indigo-100 text-indigo-600' },
  { name: 'Химия', icon: 'FlaskConical', color: 'bg-orange-100 text-orange-600' },
  { name: 'Биология', icon: 'Leaf', color: 'bg-emerald-100 text-emerald-600' },
  { name: 'Обществознание', icon: 'Users', color: 'bg-pink-100 text-pink-600' }
];

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', subject: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', subject: '' });
  };

  return (
    <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Записаться на бесплатное занятие
          </h2>
          <p className="text-xl text-gray-600">60 минут онлайн с преподавателем</p>
        </div>
        <Card className="animate-on-scroll shadow-2xl border-0">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Ваше имя</Label>
                <Input 
                  id="name" 
                  placeholder="Иван Иванов" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+7 (999) 123-45-67" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="subject">Предмет</Label>
                <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Выберите предмет" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject, idx) => (
                      <SelectItem key={idx} value={subject.name}>
                        {subject.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  Я соглашаюсь на обработку персональных данных и принимаю условия политики конфиденциальности
                </Label>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-700 text-lg py-6">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
