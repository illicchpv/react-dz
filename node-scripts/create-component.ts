// scripts/create-component.ts
import fs from 'fs';
import path from 'path';
import readline from 'readline';

// Создаем интерфейс для чтения ввода
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Функция для вопроса пользователю
function askQuestion(question: string): Promise<string> {
	return new Promise((resolve) => {
		rl.question(question, (answer) => {
			resolve(answer.trim());
		});
	});
}

// Функция для проверки существования компонента
function componentExists(componentName: string, basePath: string): boolean {
	const componentPath = path.resolve(process.cwd(), basePath, componentName);
	
	// Проверяем существование директории компонента
	if (!fs.existsSync(componentPath)) {
		return false;
	}
	
	// Проверяем существование основных файлов компонента
	const requiredFiles = [
		`${componentName}.tsx`,
		`${componentName}.props.ts`, 
		`${componentName}.module.css`
	];
	
	const existingFiles = requiredFiles.filter(fileName => {
		const filePath = path.join(componentPath, fileName);
		return fs.existsSync(filePath);
	});
	
	// Если есть хотя бы один файл компонента, считаем что компонент существует
	return existingFiles.length > 0;
}

async function main() {
	try {
		// Получаем аргументы командной строки
		const args = process.argv.slice(2);
		let componentName = args[0];
		const customPath = args[1] || 'src/components';

		// Если имя компонента не передано как аргумент, запрашиваем его
		if (!componentName) {
			componentName = await askQuestion('📝 Enter component name: ');

			if (!componentName) {
				console.error('❌ Component name is required!');
				rl.close();
				process.exit(1);
			}
		}

		// Проверяем валидность имени компонента
		if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
			console.error('❌ Component name must start with a capital letter and contain only letters and numbers!');
			rl.close();
			process.exit(1);
		}

		const finalPath = customPath;

		// Проверяем существование компонента
		if (componentExists(componentName, finalPath)) {
			console.error(`❌ Component "${componentName}" already exists in "${finalPath}"!`);
			console.error('Please choose a different name or delete the existing component.');
			rl.close();
			process.exit(1);
		}

		// Генерация файлов компонента
		function generateComponentFiles(componentName: string) {
			const componentContent = (`
import styles from './${componentName}.module.css';
import type { ${componentName}Props } from './${componentName}.props';
import cn from 'classnames';

function ${componentName}({ children, className, ...props }: ${componentName}Props) {

	return (
		<div className={cn(styles.${componentName.toLowerCase()}, className)} {...props}>
			{children}
		</div>
	);
}
export default ${componentName};
`).trim();

			const propsContent = (`
export interface ${componentName}Props {
	children?: React.ReactNode;
	className?: string;
}
`).trim();

			const stylesContent = (`
.${componentName.toLowerCase()} {
}
`).trim();

			return {
				[`${componentName}.tsx`]: componentContent,
				[`${componentName}.props.ts`]: propsContent,
				[`${componentName}.module.css`]: stylesContent
			};
		}

		const fullPath = path.resolve(process.cwd(), finalPath, componentName);

		// Создаем директорию если не существует
		if (!fs.existsSync(fullPath)) {
			fs.mkdirSync(fullPath, { recursive: true });
		}

		// Создаем файлы
		const files = generateComponentFiles(componentName);
		for (const [fileName, content] of Object.entries(files)) {
			const filePath = path.join(fullPath, fileName);
			fs.writeFileSync(filePath, content);
			console.log(`✅ Created: ${filePath}`);
		}

		console.log(`🎉 Component "${componentName}" created successfully!`);
		console.log(`📍 Location: ${fullPath}`);

	} catch (error) {
		console.error('❌ Error creating component:', error);
	} finally {
		rl.close();
	}
}

// Запускаем основную функцию
main();