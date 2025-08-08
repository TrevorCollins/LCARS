import Card from '../../../components/Card';
import type { ProjectType } from '../../../types';

const Project = ({ id, name, url, repo, thumbnail, description }: ProjectType) => {
	const srcset = `
				/images/projects/${thumbnail}_2000.webp 2000w,
				/images/projects/${thumbnail}_1280.webp 1280w,
				/images/projects/${thumbnail}_1024.webp 1024w,
				/images/projects/${thumbnail}_768.webp 768w,
				/images/projects/${thumbnail}_640.webp 640w,
				`;
	const projectLink = (
		<a href={url} target='_blank' className='project__link'>
			View Project
		</a>
	);
	const repoLink = (
		<a href={`https://github.com/TrevorCollins/${repo}`} target='_blank' className='project__link'>
			View Repo
		</a>
	);
	return (
		<Card id={id} title={name} rightItems={[projectLink, repoLink]} className='project__card col-span-6 row-span-3'>
			<div className='project__body'>
				<img
					src={`/images/projects/${thumbnail}_1280.webp`}
					srcSet={srcset}
					sizes='(max-width: 1024px) 80dvw, (max-width: 1280px) 40dvw, 20dvw'
					alt={name}
					className='project__image'
				/>
				<p className='project__description'>{description}</p>
			</div>
		</Card>
	);
};

export default Project;
