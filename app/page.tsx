"use client";
import { CardFaculty } from "@/components/CardFaculty";
import CircularWordCloud from "@/components/CircularWordCloud";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { faculties, institutions, venues, words } from "@/constants/index";
import { useState } from "react";

export default function Home() {
  const [displayedCount, setDisplayedCount] = useState(3);
  const handleSeeMore = () => setDisplayedCount(displayedCount + 3);
  const [displayedInsCount, setDisplayedInsCount] = useState(3);
  const handleSeeMoreIns = () => setDisplayedInsCount(displayedInsCount + 3);
  const [displayedVenueCount, setDisplayedVenueCount] = useState(3);
  const handleSeeMoreVenue = () =>
    setDisplayedVenueCount(displayedVenueCount + 3);

  return (
    <>
      <Header />
      <MaxWidthWrapper className="mt-4">
        <div className="text-3xl font-semibold mb-6 text-center pt-16 pb-8">
          Faculties
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row flex-wrap justify-evenly">
            {faculties.map(
              (faculty, index) =>
                index < displayedCount && (
                  <div key={index} className="mb-4">
                    <CardFaculty
                      image={faculty.image}
                      name={faculty.name}
                      description={faculty.description}
                      institution={faculty.institution}
                    />
                  </div>
                )
            )}
          </div>
          <div className="flex justify-center">
            {displayedCount < faculties.length && (
              <Button onClick={handleSeeMore}>
                See More ({faculties.length - displayedCount} remaining)
              </Button>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="mt-4">
        <div className="text-3xl font-semibold mb-6 text-center pt-16 pb-8">
          Institutions
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row flex-wrap justify-evenly">
            {institutions.map(
              (institution, index) =>
                index < displayedInsCount && (
                  <div key={index} className="mb-4">
                    <CardFaculty
                      name={institution.name}
                      description={institution.description}
                    />
                  </div>
                )
            )}
          </div>
          <div className="flex justify-center">
            {displayedInsCount < institutions.length && (
              <Button onClick={handleSeeMoreIns}>
                See More ({institutions.length - displayedInsCount} remaining)
              </Button>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="mt-4">
        <div className="text-3xl font-semibold mb-6 text-center pt-16 pb-8">
          Venus
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row flex-wrap justify-evenly">
            {venues.map(
              (venue, index) =>
                index < displayedVenueCount && (
                  <div key={index} className="mb-4">
                    <CardFaculty
                      name={venue.name}
                      description={venue.description}
                    />
                  </div>
                )
            )}
          </div>
          <div className="flex justify-center">
            {displayedVenueCount < venues.length && (
              <Button onClick={handleSeeMoreVenue}>
                See More ({venues.length - displayedVenueCount} remaining)
              </Button>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="text-3xl font-semibold text-center pt-16 pb-8">
          Concepts
        </div>
        <div className="flex justify-center">
          <div className="w-[80%] rounded-full">
            {/* <ReactWordcloud words={words} /> */}
            {words && <CircularWordCloud words={words} />}
          </div>
        </div>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
