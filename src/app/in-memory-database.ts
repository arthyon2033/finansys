import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {

    createDb() {
        const categories: Category[] = [
            { id: 1, name: 'Moradia', description: 'Pag. de contas da casa.' },
            { id: 2, name: 'Saúde', description: 'Plano de saúde e remédios.' },
            { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
            { id: 4, name: 'Salário', description: 'Recebimento de salário' },
            { id: 5, name: 'Freelas', description: 'Trab. como freelancer' }
        ];

        const entries: Entry[] = [
            {
                id: 1,
                name: 'Gás de Cozinha',
                description: 'Qualquer descrição',
                type: 'expense',
                amount: '70,80',
                date: '14/10/2018',
                paid: true,
                categoryId: categories[0].id,
                category: categories[0]
            } as Entry,
            {
                id: 2,
                name: 'Suplementos',
                description: 'Qualquer descrição',
                type: 'expense',
                amount: '15,00',
                date: '14/10/2018',
                paid: false,
                categoryId: categories[1].id,
                category: categories[1]
            } as Entry,
            {
                id: 3,
                name: 'Salário na empresa X',
                description: 'Qualquer descrição',
                type: 'revenue',
                amount: '4405,30',
                date: '15/10/2018',
                paid: true,
                categoryId: categories[3].id,
                category: categories[3]
            } as Entry
        ];

        return { categories, entries };
    }

}
