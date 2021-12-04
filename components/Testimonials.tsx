import { Testimonial } from "graphql/strapiTypes";
import Image from "next/image";
import getSmallCloudinary from "utils/getSmallCloudinary";

type TestimonialCardProps = {
    testimonial: Testimonial;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="rounded-md flex flex-col gap-4 min-w-[18rem] max-w-[18rem] p-5 bg-white border-2 border-gray-200 text-center">
            <div className="flex flex-col text-sm font-light text-left items-center justify-self-start w-full h-full leading-loose tracking-wide text-gray-700 py-1">
                {testimonial.testimonial}
            </div>
            <div
                id="reviewer"
                className="flex flex-row justify-start items-center"
            >
                <div className="h-16 min-w-[4rem] relative">
                    <Image
                        src={testimonial.image.url}
                        alt="Picture of the Testimional writer"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        placeholder="blur"
                        blurDataURL={getSmallCloudinary(testimonial.image.url)}
                    />
                </div>
                <div className="flex flex-col ml-5">
                    <div className="font-semibold tracking-wide">
                        {testimonial.name}
                    </div>
                    <div className="text-sm font-light text-gray-600">
                        {testimonial.title}
                    </div>
                </div>
            </div>
        </div>
    );
};

type TestimonialsProps = {
    testimonials: Testimonial[];
};

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
    return (
        <>
            <div className="py-12 bg-white">
                <div className="text-4xl font-semibold tracking-widest leading-relaxed text-center w-full pb-6 px-2">
                    What our Pilots are saying
                </div>
                <div className="w-full">
                    <div className="bg-white flex flex-col sm:flex-row gap-6 justify-between items-center sm:items-stretch px-5 py-10 overflow-x-scroll">
                        {testimonials.map((testimonial) => (
                            <TestimonialCard
                                key={testimonial.id}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
