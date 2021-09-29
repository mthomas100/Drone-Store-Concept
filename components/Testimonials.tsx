import Image from "next/image";

type TestimonialCardTypes = {
    testimonial: string;
    imageUrl: string;
    name: string;
    position: string;
};

const TestimonialCard: React.FC<TestimonialCardTypes> = ({
    testimonial,
    imageUrl,
    name,
    position,
}) => {
    return (
        <div className="rounded-md flex flex-col gap-4 min-w-[18rem] max-w-[18rem] p-5 bg-white border-2 border-gray-200 text-center">
            <div className="flex flex-col text-sm font-light text-left items-center justify-self-start w-full h-full leading-loose tracking-wide text-gray-700">
                {testimonial}
            </div>
            <div
                id="reviewer"
                className="flex flex-row justify-start items-center"
            >
                <div className="h-16 min-w-[4rem] relative">
                    <Image
                        src={imageUrl}
                        alt="Picture of the Testimional writer"
                        layout="fill" // required
                        objectFit="cover" // change to suit your needs
                        className="rounded-full" // just an example
                    />
                </div>
                <div className="flex flex-col ml-5">
                    <div className="font-semibold tracking-wide">{name}</div>
                    <div className="text-sm font-light text-gray-600">
                        {position}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Testimonials: React.FC = () => {
    return (
        <>
            <div className="py-12 bg-white">
                <div className="text-4xl font-semibold tracking-widest leading-relaxed text-center w-full pb-6">
                    What our Pilots are saying
                </div>
                <div className="w-full">
                    <div className="bg-white flex flex-col sm:flex-row gap-6 justify-between items-center sm:items-stretch px-5 py-10 overflow-x-scroll">
                        <TestimonialCard
                            testimonial=" With high resolution camera, picture become clear and beautiful. It’s so easy to operate drone."
                            imageUrl="/images/testimonialpic1.png"
                            name="Hugo Adams"
                            position="Content Creator"
                        />
                        <TestimonialCard
                            testimonial="Taking high view video become easy and faster. Battery performance really helping for making film."
                            imageUrl="/images/testimonialpic2.png"
                            name="Jennie Obrien"
                            position="Director Film"
                        />
                        <TestimonialCard
                            testimonial="Making video content for my trip vlog so powerful and wonderful. Love the video quality."
                            imageUrl="/images/testimonialpic3.png"
                            name="Lisa Millz"
                            position="Content Creator"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
